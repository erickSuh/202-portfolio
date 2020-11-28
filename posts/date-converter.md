---
title: 'Date converter'
date: '2020-11-28'
author: 'Érick Kenji Sugahara'
categories: 'date, utilities'
---

Work with dates is one of biggest problem in a application. In this post you will see some practices to use on project.

# Using lib to do a date converter

Whenever when we programming, we need do a lot of times the same conversions. A simple way to resolve all de various date converter is use.

In the case we used [date-fns](https://date-fns.org/) to do all the conversions, otherwise, you can use [moment](https://momentjs.com/) or build other library.

* Format a simple date:

```typescript
import { format } from 'date-fns'

export default function Date({ date }: { date: Date }) {
  // Convert date time to month day, year Ex.: November 28, 2020
  return format(date, 'LLLL d, yyyy')
}
```

* Format a string to date and print in react:

```typescript
import { parseISO, format } from 'date-fns'

export default function Date({ dateString }: { dateString: string }) {
  // Convert date string to date
  const date = parseISO(dateString)

  // Convert date time to month day, year Ex.: November 28, 2020
  return format(date, 'LLLL d, yyyy')
}
```

# Using only javascript

If you need a simple formatter, not necessarily you will need a library, you can build your own converter but this cost time. I recommended [this](https://javascript.info/date#:~:text=The%20string%20format%20should%20be,%3A%20year%2Dmonth%2Dday.) to work with dates.

# Working with database

If you using a database is strongly recommended to save with UTC+0 and convert on front-end. This is because the user can stand everywhere.