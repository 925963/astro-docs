---
title: Viewing issue validation results
description: Learn how to view Issue Quality validation results on individual Jira issues.
---

On each issue you can view the results of a validation. You can see the number of passed and failed standards in the **Quality scores** field. And you can see the details in the **Quality standard scores** panel.

## View the Quality scores field

The **Quality scores** field shows you at a glance how many standards an issue passes and fails.

:::note
If you don't see the field, it can be that the field has not been added to the Screens for your project. For information about adding fields to screens, see [Add a custom field to a screen](https://support.atlassian.com/jira-cloud-administration/docs/add-a-custom-field-to-a-screen/).
:::

## View the Quality standard scores panel

To see the **Quality standard scores** panel with the full details, click the **+ Add** button below your issue summary and choose **'Quality standard scores'**.

The panel will expand and display:
- Each Quality standard that applies to the issue
- Whether the issue passes or fails each standard
- A link to the documentation for each standard (if provided)
- The overall IQ Score as a percentage

## Understanding the IQ Score

The IQ Score is a percentage between **0% and 100%**. When an issue meets all the Quality Standards, it scores 100%. The score is calculated as the percentage of standards that the issue passes.
