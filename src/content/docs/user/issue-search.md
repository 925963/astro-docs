---
title: Issue search (Filters)
description: Learn how to search for Jira issues based on their Issue Quality scores using JQL filters.
---

You can search for issues that do not comply with Quality standards. You can use the 3 available JQL fields for that.

## Available search fields

You can search for issues based on their number of passed Quality standards or the number of failed Quality standards.

| Search parameter | Operators | Explanation |
|---|---|---|
| `"Jira IQ"` | IS EMPTY, IS NOT EMPTY | To find issues for which a validation has (not) been executed and Quality standards were (not) in scope |
| `"Jira IQ.IQ Score"` | =, >, <, >=, <= | To find issues that have a specific (range) IQ Score |
| `"Jira IQ.Passes"` | =, >, <, >=, <= | To find issues that have a certain number of Quality standards for which the issue met its condition during its last validation |
| `"Jira IQ.Fails"` | =, >, <, >=, <= | To find issues that have a certain number of Quality standards for which the issue did not meet its condition during its last validation |

## Global or Project scope

For the IQ Score, Passes and Fails, you can also use the `global` or `project` extension to find issues only based on the Global or Project scoped Quality Standards.

For example, you can use `"Jira IQ.Fails global" > 0` to find issues that do not meet one (or more) of the Global Quality Standards.

## Examples

| Query | Result |
|---|---|
| `"Jira IQ.Passes" > 1` | Issues that have more than 1 (2 or above) Quality standards for which the issue met its condition during the last validation |
| `"Jira IQ.Fails" < 3` | Issues that have less than 3 (2 or below) Quality standards for which the issue did not meet its condition during the last validation |
| `"Jira IQ.IQ Score" <= 40` | Issues for which the overall IQ Score is 40 or lower |
