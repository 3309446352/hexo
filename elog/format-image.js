const { matterMarkdownAdapter } = require('@elog/cli')

/**
 * 自定义文档处理器
 * @param {DocDetail} doc doc的类型定义为 DocDetail
 * @param {any} imageClient 图床下载器
 * @return {Promise<DocDetail>} 返回处理后的文档对象
 */
const format = async (doc, imageClient) => {
  const cover = doc.properties.cover
  if (imageClient)  {
    const url = await imageClient.uploadImageFromUrl(cover, doc)
    doc.properties.cover = url
  }
  doc.body = matterMarkdownAdapter(doc);
  return doc;
};

module.exports = {
  format,
};
