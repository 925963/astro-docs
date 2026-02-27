---
title: Setting conditions and scope using JQL
description: Learn how to use Jira Query Language (JQL) to define quality conditions and scope in Issue Quality for Jira.
---

As project or Jira administrator you can manage the Quality standards. The condition and scope of a standard are set using Jira Query Language (JQL).

If you're not familiar with JQL: don't worry! On this page you can read how to easily generate it.

We use JQL in our App because it is the most powerful and versatile way of filtering. This makes it the right tool for defining quality standards.

In the Create or Edit screen for a Quality standard, you will have to enter the JQL in the **JQL condition** field and optionally in the **This quality standard only applies to** field.

## If you're familiar with JQL

If you are familiar with JQL, you can type in the query straight away. We have included a **Validate query** button for you to check if your JQL is correct. Click the button to test it.

If your JQL is valid, it will show you how many issues are returned by your query. When you click on the count, a new window/tab will open with the search results. This way you can also easily check to see if the returned issues are what you expected.

If your JQL is invalid, the error message will be displayed.

## If you're not familiar with JQL

If you're not familiar (enough) with JQL, you can still define a good Condition (and Scope if needed).

If you have Jira Premium and Atlassian Intelligence has been enabled, you can use the Atlassian Intelligence feature to generate the JQL for you by simply describing your condition in plain language.

Otherwise, follow these three steps:

### Step 1: Generate your filter using Basic filtering

1. In the top navigation, go to **Filters > View all Issues**. In the new Jira interface (with the main menu in the side bar), go to **Filters > Search for issues**.
2. In the Issue search screen, make sure the search mode is set to **Basic** (not JQL).
3. Start filtering the issues using the drop-down filters, text filters and date filters you need.

### Step 2: Convert the filter to JQL

Once you're satisfied with your filtering, switch the search mode from **Basic** to **JQL**. Jira now automatically generates the JQL for your filter. You can remove any unnecessary bits from the JQL.

In the below example, the `ORDER BY created DESC` is unnecessary, so you would end up with a simple `assignee != empty`.

### Step 3: Copy-paste the JQL to the Quality standard

You now have your JQL. Copy the query from the Issue search screen and use it in your Quality standard!

You can read all about JQL here: [Use advanced search with Jira Query Language (JQL)](https://support.atlassian.com/jira-service-management-cloud/docs/use-advanced-search-with-jira-query-language-jql/)
