---
title: Donate
---
<div class="container">
<section>
  <h1>Donate</h1>
</section>

<div class="grid">
  <div markdown="1">
If you'd like to support our work, please consider donating!

We plan to use donations primarily to fund the work of developing educational programs for school and youth. These are more specialized programs, and take more time and labor, but schools don't always have the resources to cover the full cost.

{% include stripe-donate.html %}
  </div>
  <div markdown="1">
{% include img.html name="primrose-glam" %}
  </div>
</div>

<section markdown="1">
We will email all our donors with a report at the end of the year, detailing where donations went.

We are not a registered non-profit organization, so donations are not tax-deductible. They are, however, appreciated.

{% include stripe-donate.html %}
[Don't see a Donate button? Try this link.]({{ site.data.config.stripe.donate_link }})
</section>
</div>

<script async src="https://js.stripe.com/v3/buy-button.js"></script>
