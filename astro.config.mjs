// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
		site: 'https://925963.github.io',
		base: '/astro-docs',
		integrations: [
					starlight({
									title: 'Issue Quality for Jira',
									description: 'Improve data quality in Jira. Define your own quality standards, track issue quality and take action.',
									social: [
										{ icon: 'github', label: 'GitHub', href: 'https://github.com/925963/astro-docs' },
													],
									sidebar: [
										{
																label: 'Getting started',
																items: [
																	{ label: 'Getting started with Jira IQ', slug: 'getting-started' },
																						],
										},
										{
																label: 'Basic concepts',
																items: [
																	{ label: 'Overview', slug: 'concepts/overview' },
																	{ label: 'Quality standard', slug: 'concepts/quality-standard' },
																	{ label: 'Validations', slug: 'concepts/validations' },
																						],
										},
										{
																label: 'Administrator guide',
																items: [
																	{ label: 'Manage IQ standards', slug: 'admin/manage-iq-standards' },
																	{ label: 'Setting conditions and scope using JQL', slug: 'admin/jql-conditions' },
																						],
										},
										{
																label: 'User guide',
																items: [
																	{ label: 'Issue search (Filters)', slug: 'user/issue-search' },
																	{ label: 'Viewing issue validation results', slug: 'user/viewing-results' },
																						],
										},
													],
					}),
				],
});
