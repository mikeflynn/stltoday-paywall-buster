# STLToday Paywall Buster

## v2022

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

### Chrome

You'll need to download the code and add it to your browser manually. Out of the box it is ready to be added [locally to Chrome](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked).

### Safari

To install with Safari, you'll need to look in the `safari` directory where there is an xcode project. That project should be open and ran which will add it to your local Safari. Once you approve the STLToday URLs, and turn on the extension, it will work in Safari.

### Safari Mobile

TBD

### Firefox

TBD

## v2021

This repo has been retired in favor of this actively updated Gist that creates a bookmarklet to get around the STLToday paywall: https://gist.github.com/mikeflynn/bc92e4d1ad1d09253c4c44fcb99a439c

## v2014

A browser user script to prevent the [STLToday.com](http://stltoday.com) (the website of St. Louis' major newspaper, The Post Dispatch) paywall from activating by simply marking the content as free. See how to install this on your browser of choice (Chrome or Firefox are preferred) here: [wiki.greasespot.net/Cross-browser_userscripting](http://wiki.greasespot.net/Cross-browser_userscripting)

## Links / More Information

* [Paywalls are OK, but Dumb Paywalls Aren't](https://c33tech.com/blog/2019/11/paywalls/)
* [The Angry Trush: Follow Up on the STLToday.com Paywall Story](https://c33tech.com/blog/2014/04/follow-up-on-stltoday-paywall/)
* [Riverfront Times: This Guy Hacked the St. Louis Post-Dispatch Paywall in Ten Minutes, And You Can, Too](http://blogs.riverfronttimes.com/dailyrft/2014/04/this_guy_hacked_the_st_louis_p.php)
* [The Angry Truth: STLToday's Paywall is Weak](https://c33tech.com/blog/2014/04/stltoday-paywall-is-weak/)