import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { Button, CheckboxControl } from '@wordpress/components';

registerBlockType('portart/listfaq', {
  title: 'FAQ',
  icon: 'smiley',
  category: 'layout',
  attributes: {
    blocksData: {
      type: 'array',
      default: [],
    },
    count: {
      type: 'number',
      default: 1,
    },
    useAccordion: {
      type: 'boolean',
      default: true,
    },
  },

  edit: ({ attributes: { blocksData, count, useAccordion }, setAttributes }) => {
    // アイテムの追加
    const addBlock = () => {
      const newBlock = { id: blocksData.length + 1, content: `` };
      setAttributes({
        blocksData: [...blocksData, newBlock],
        count: count++
      });
    };

    // アイテムの削除
    const removeBlock = (id) => {
      const updatedBlocksData = blocksData.filter((block) => block.id !== id);
      setAttributes({
        blocksData: updatedBlocksData,
        count: count++
      });
    };

    // テキストの編集
    const changeArrayText = (newText, index, label) => {
      let newArray = blocksData;
      newArray[index][label] = newText;
      setAttributes({
        blocksData: newArray,
        count: count++
      });
    }

    // useAccordionの値を変更する
    const toggleAccordion = (isChecked) => {
      setAttributes({ useAccordion: isChecked });
    };

    return (
      <div>
        <CheckboxControl
          label="js-accordion機能を使用"
          checked={useAccordion}
          onChange={toggleAccordion}
        />
        <div style={{
          display: 'grid',
          gap: '24px'
        }}>
          {blocksData.map((block, index) => (
            <div>
              <div key={block.id} className="dynamic-block">
                <div style={{
                  display: 'flex',
                  gap: '8px'
                }}>
                  <p className="c-text--bold">Q</p>
                  <RichText
                    value={block.label}
                    onChange={newText => changeArrayText(newText, index, 'label')}
                    tagName='p'
                    placeholder="質問を入力してください"
                    keepPlaceholderOnFocus={true}
                  />
                </div>
                <div style={{
                  display: 'flex',
                  gap: '8px'
                }}>
                  <p className="c-text--bold">A</p>
                  <RichText
                    value={block.value}
                    onChange={newText => changeArrayText(newText, index, 'value')}
                    tagName='p'
                    placeholder="解答タイトルを入力してください"
                    keepPlaceholderOnFocus={true}
                  />
                </div>
                <Button isDestructive onClick={() => removeBlock(block.id)}>アイテムを削除</Button>
              </div>
            </div>
          ))}
        </div>

        <Button isPrimary onClick={addBlock}>アイテムを追加</Button>
      </div>
    )
  },

  save: ({ className, attributes: { blocksData, useAccordion } }) => {
    
    const accordionClasses = useAccordion ? 'js-accordion' : '';
    const accordionTriggerClasses = useAccordion ? 'js-accordion-trigger' : '';
    const accordionContentClasses = useAccordion ? '' : 'is-open';

    return (
      <div>
        <ul className={`p-faq__list ${accordionClasses}`}>
          {blocksData.map((block, index) => (
            <li className={`p-faq__items ${accordionTriggerClasses} animation`}>
              <div className='p-faq__inner'>
                <RichText.Content
                  value={block.label}
                  tagName='p'
                  className='p-faq__header c-text__page-title c-text--bold c-text__space--med'
                />
              </div>
              <RichText.Content
                value={block.value}
                tagName='p'
                className={`p-faq__content c-text__page-title c-text--white c-text--bold c-text__space--med accordion__content c-text--link c-text--link__icon ${accordionContentClasses}`}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  },
});