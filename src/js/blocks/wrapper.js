import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, InspectorControls, PanelColorSettings, URLInput } from '@wordpress/block-editor';
import { Button, TextControl, CheckboxControl, TextareaControl, RadioControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

registerBlockType('portart/wrapper', {
  title: 'wrapper',
  icon: 'smiley',
  category: 'layout',
  attributes: {
    wrapToggle: {
      type: 'boolean',
      default: false,
    },
    addClassName: {
      type: 'string',
      default: '',
    },
    addId: {
      type: 'string',
      default: '',
    },
    addAttr: {
      type: 'string',
      default: '',
    },
    linkUrl: {
      type: 'string',
      default: '',
    },
    isChecked: {
      type: 'boolean',
      default: false,
    },
    display: {
      type: 'string',
      default: '', // デフォルト値
    }
  },

  edit: ({ attributes, attributes: { addClassName, addId, addAttr, linkUrl, wrapToggle, isChecked, display }, setAttributes }) => {
    const [toggle, setToggle] = useState(wrapToggle);

    const onChangeClass = (newText) => {
      setAttributes({
        addClassName: newText
      });
    }
    const onChangeAttr = (newAttr) => {
      setAttributes({
        addAttr: newAttr
      });
    }
    const onChangeId = (newId) => {
      setAttributes({
        addId: newId
      });
    }

    const onChangeLinkUrl = (newLinkUrl) => {
      setAttributes({
        linkUrl: newLinkUrl
      });
    }

    return (
      <div className='b-wrapper__box'>
        <div className='b-wrapper__box__tool'>
          <span className='c-text__med b-wrapper__class'>Class名: {addClassName}</span>
          <Button
            isSecondary
            onClick={() => {
              if(display == '') {
                setAttributes({display: 'pc'})
              } else if(display == 'pc') {
                setAttributes({display: 'sp'})
              } else {
                setAttributes({display: ''})
              }
            }}
          >
            {display ? display+'のみ表示' : '両方表示'}
          </Button>
          <Button
            isSecondary
            onClick={() => { setToggle(!toggle); setAttributes({ wrapToggle: !toggle }) }}
          >
            {toggle ? '開く' : '折りたたむ'}
          </Button>
        </div>
        <InspectorControls>
          <TextareaControl
            label="追加class"
            value={addClassName}
            onChange={onChangeClass}
          />
          <TextControl
            label="追加Id"
            value={addId}
            onChange={onChangeId}
          />
          <TextControl
            label="追加Attr"
            value={addAttr}
            onChange={onChangeAttr}
          />
          <URLInput
            label="リンクURL"
            value={linkUrl}
            onChange={onChangeLinkUrl}
          />
          {linkUrl && (
            <CheckboxControl
              label="別タブでリンクを開く"
              checked={isChecked}
              onChange={(checked) => setAttributes({ isChecked: checked })}
            />
          )}
        </InspectorControls>
        <div style={{
          height: toggle ? '0px' : 'auto',
          overflow: toggle ? 'hidden' : 'unset',
        }}>
          <InnerBlocks />
        </div>
      </div>
    )
  },

  save: ({ className, attributes: { addClassName, addId, addAttr, linkUrl, isChecked, display } }) => {
    const attrArray = addAttr.split(' ');
    let attrs = {};
    for (let i = 0; i < attrArray.length; i++) {
      const label = attrArray[i].substr(0, attrArray[i].indexOf('='));
      const value = attrArray[i].substr((attrArray[i].indexOf('=') + 1)).replace(/"/g, '');
      attrs[label] = value;
    }

    let fixClass = addClassName.replace(/\n/g, ' ');
    fixClass += ' '+display;

    if (linkUrl && isChecked) {
      return (
        <>
          <a id={addId} className={fixClass} {...attrs} href={linkUrl} target="_blank" rel="noopener noreferrer" >
            <object>
              <InnerBlocks.Content />
            </object>
          </a>
        </>
      )
    } else if (linkUrl) {
      return (
        <>
          <a id={addId} className={fixClass} {...attrs} href={linkUrl} >
            <object>
              <InnerBlocks.Content />
            </object>
          </a>
        </>
      )
    } else {
      return (
        <>
          <div id={addId} className={fixClass} {...attrs}>
            <InnerBlocks.Content />
          </div>
        </>
      )
    }
  }
})