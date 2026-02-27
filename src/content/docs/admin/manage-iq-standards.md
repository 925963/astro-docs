---
title: Manage IQ standards
description: Learn how to create, edit, enable, disable, and delete Issue Quality standards in Jira IQ.
---

Issue Quality standards can either be created on a Project level or on the Global level. In the Project Settings and Jira Settings you will see the 'Jira IQ' option in the Apps section.

## Create a new IQ standard

1. Click **Create new IQ standard**
2. Fill in the new IQ standard form:
   - **Name**: the name as displayed in the IQ results
   - **Condition**: the Jira Query Language query that defines 'good quality'. See [Setting conditions and scope using JQL](/astro-docs/admin/jql-conditions/)
   - **Scope**: optionally limit the issues to which this standard applies (e.g.: only for Stories and bugs)
   - **Documentation**: optionally provide a URL that points to more information about the standard

## Enable or disable an IQ standard

You can enable and disable an IQ standard. To do this, open the Jira IQ settings in your project or Jira settings and click the **Enabled** toggle to switch between enabled and disabled.

## Edit an IQ standard

1. Open the Jira IQ settings in your project or Jira settings.
2. In the standard table, click the **Actions** menu for the rule you want to edit and choose **Edit**.
3. Make the changes you want and click **Save** to save your changes.

## Delete an IQ standard

:::caution
Deleting a standard cannot be undone.
:::

1. Open the Jira IQ settings in your project or Jira settings.
2. In the standard table, click the **Actions** menu for the rule you want to delete and choose **Delete**.
3. Confirm the deletion in the Confirm delete window.

Your standard is gone.
