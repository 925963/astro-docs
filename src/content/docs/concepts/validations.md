---
title: Validations
description: Understand how Issue Quality for Jira validates issues against Quality standards.
---

A validation is the event where an Issue is assessed against the Quality standards that are in scope for the Issue.

## When is an issue validated?

An issue validation is executed when:

- The issue is **created**
- The issue is **updated**
- The issue is **viewed**, and a Quality standard is added, removed or updated since the last validation

## Resolved issues

Resolved issues are no longer (re-)validated against Quality standards. The reason for this is that it doesn't seem fair to assess an issue against standards that didn't even exist at the time it was being worked with.

The moment an issue is being resolved (the status transition towards a status that sets its resolution), the issue will be validated one final time.

Once the resolution is cleared (e.g. by reopening an issue), validations will be executed again.

## View the last validation information

You can find information about the validation status on the issue view. If you don't see the Quality standard scores, make sure to click 'Apps' and select 'Quality standard scores' below the Issue summary.

The validation status can have 3 different states:

- **Under active validation**
- **Resolved issues are not re-assessed**
- **No active license, so will not be re-assessed**

When viewing an issue, you'll see the last validation result. In the background, a check will be performed to see if a revalidation is required (due to rule changes). So it might be that after a few seconds, the validation results will change while you're looking at the issue.
