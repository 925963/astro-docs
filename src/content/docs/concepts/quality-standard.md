---
title: Quality standard
description: Learn what a Quality standard is and how to define quality criteria in Issue Quality for Jira.
---

A Quality standard is a (set of) criteria for an Issue to be considered of good quality.

A Quality standard is defined by:

- **Name**: the name of the standard
- **Condition**: the (JQL) criteria for the Issue to be considered good quality
- **Scope**: an optional filtering to only apply the standard to issues with certain properties
- **Documentation**: an optional link to more information about the standard

An example of a Quality standard:

> **Name**: Stories must have a parent Epic as soon as they are In Progress
> **Condition**: parent IS NOT EMPTY
> **Scope**: type = Story and statusCategory != "To Do"

## Global or Project standards

A Quality standard can be set on **Global** or **Project** level.

A Quality standard set at the **Global level** by a Jira Administrator applies to all Projects in Jira (but can be limited by setting their scope).

**Project Administrators** can define and manage Quality standards on a Project level. These standards will only apply to the issues within their project.

If you want to set a standard for a set of projects, a Jira Administrator can create the standard globally but use the Scope to limit it to only a set of projects using JQL.

## Name

The name is a short descriptive title for the Quality standard. It will be displayed in the Quality standard scores when viewing an issue.

## Condition

The condition is the criteria for an Issue to be considered of good quality. It is defined using Jira Query Language (JQL). See [Setting conditions and scope using JQL](/astro-docs/admin/jql-conditions/).

## Scope

Some rules might not apply to all issues. The Scope allows you to restrict which issues the standard applies to. This is also done using JQL.

For example:
- Apply only to Bugs: type = Bug
- Exclude sub-task issue types: type not in subTaskIssueTypes()

## Documentation

You can optionally provide a link to more information about the standard. When provided, an icon is displayed in the Quality standard scores on the issue. Clicking it opens the link in a new window.
