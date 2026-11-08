import { cloneElement, isValidElement, type ReactNode } from 'react';
import { blogPosts as originalPosts } from '@/data/blogs';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from './config';
export type { BlogPost } from '@/data/blogs';

function updateContact(value: string): string;
function updateContact(value: string | undefined): string | undefined;
function updateContact(value: string | undefined): string | undefined {
  return value
    ?.replaceAll('966535173600', WHATSAPP_NUMBER)
    .replaceAll('0535173600', PHONE_NUMBER);
}

function updateContactInContent(node: ReactNode): ReactNode {
  if (typeof node === 'string') return updateContact(node);
  if (Array.isArray(node)) return node.map(updateContactInContent);
  if (!isValidElement<{ children?: ReactNode; href?: string }>(node)) return node;

  const { children, href } = node.props;
  return cloneElement(node, { href: updateContact(href), children: updateContactInContent(children) });
}

export const blogPosts = originalPosts.map((post) => {
  const title = updateContact(post.title);
  return {
    ...post,
    slug: updateContact(post.slug),
    title: title.includes(PHONE_NUMBER) ? title : `${title} | ${PHONE_NUMBER}`,
    imageUrl: updateContact(post.imageUrl),
    metaDescription: updateContact(post.metaDescription),
    metaKeywords: post.metaKeywords?.map((keyword) => updateContact(keyword)),
    toc: updateContactInContent(post.toc),
    content: updateContactInContent(post.content),
    markdownToc: updateContact(post.markdownToc),
    markdownContent: updateContact(post.markdownContent),
  };
});
