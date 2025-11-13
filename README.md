# STLToday Paywall Buster


Quick Access: [Changelog](#changelog)     [Installation](#installation)     [Links](#links)

--

## Changelog

### v2025.11

I'm so happy to know that the STLToday team, or at least the team at Lee Enterprises are fans and avid readers of my work!

Earlier this year STLToday made some changes to their paywall, but I didn't need to even make a new version of this extension because I found (Spoilers! [You can read it all here.](https://c33tech.com/blog/2025/08/hacking_the_stltoday_paywall_v2025/)) that just turning off javascript evaded the paywall entirely.

...but then they changed it again! (Thanks for reading!)

Ok, so what did they do this time?

More of the same really, aka hiding the content after some javascript loads...but they added two new twists:
1. They killed the whole site if you have javascript turned off.
2. They "encrypt" the content.

#1 seems to be in response to the flaw I mentioned, and #2 must be something to prevent scraper sites from reading the content.

What #2 can't be about is stopping me from busting it, becauase the "encryption" is really just some simple math and if you look hard enough the function is right there in the browser.

I will no longer be telling them to just not deliver the content to the browser. At this point I think they are unable to or refuse to do that for some reason. 🤷

You can download the new release here and just manually add it to your Chrome. I haven't updated the Safari version because it's a pain and I don't think anyone used it.

### v2022

The repo and browser extension is back! In April of 2022, STLToday.com released a new version of their paywall. It's smarter, and that's why we have to go back from it being an easily installed bookmarklet, to a full browser extension...but it's not smart enough to stop us.

Here's what they did that was smart:
1. They actually remove the content rather than hide it!
2. They correctly have the default and error state to block the content.
3. They are putting the blocking logic higher in the page load.
4. They are obsurcing their meta tags they use to check access.

Here's what they did that was dumb:
1. They still deliver all the content to the browser.

This new browser extension counteracts the new paywall in a few different ways:
* It tries to short curcuit the access logic so that you never get the "hard" paywall and only ever see the warning paywall.
* It adjusts the content markers so that the logic can't delete it if the "hard" paywall shows up.
* It hides any paywall modals that show up automatically.

For good measure, the extension also hides a few of the most annoying ad blocks and "features" below the article.

### v2021

This repo has been retired in favor of this actively updated Gist that creates a bookmarklet to get around the STLToday paywall: https://gist.github.com/mikeflynn/bc92e4d1ad1d09253c4c44fcb99a439c

### v2014

A browser user script to prevent the [STLToday.com](http://stltoday.com) (the website of St. Louis' major newspaper, The Post Dispatch) paywall from activating by simply marking the content as free. See how to install this on your browser of choice (Chrome or Firefox are preferred) here: [wiki.greasespot.net/Cross-browser_userscripting](http://wiki.greasespot.net/Cross-browser_userscripting)

## Installation

### Chrome

You'll need to download the code and add it to your browser manually. Out of the box it is ready to be added [locally to Chrome](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked).

### Safari

_Not supported._

### Firefox

I think you can just use the same Chrome extension? If there's easy adjustment here for Firefox users, let me know.

## Links

* [Hacking the STLToday Paywall v2025](https://c33tech.com/blog/2025/08/hacking_the_stltoday_paywall_v2025/)
* [Paywalls are OK, but Dumb Paywalls Aren't](https://c33tech.com/blog/2019/11/paywalls/)
* [Follow Up on the STLToday.com Paywall Story](https://c33tech.com/blog/2014/04/follow-up-on-stltoday-paywall/)
* [Riverfront Times: This Guy Hacked the St. Louis Post-Dispatch Paywall in Ten Minutes, And You Can, Too](http://blogs.riverfronttimes.com/dailyrft/2014/04/this_guy_hacked_the_st_louis_p.php)
* [STLToday's Paywall is Weak](https://c33tech.com/blog/2014/04/stltoday-paywall-is-weak/)
