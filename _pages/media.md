---
title: In the media
---

{% include container-start.html style=1 %}
## In the media

{% for article in site.data.media.articles %}
  {% include article.md article=article %}
{% endfor %}

*Pending, in production, or not yet released*

{% for article in site.data.media.pending %}
  {% include article.md article=article %}
{% endfor %}

<hr id="divider01" class="divider-component instance-1 style-1" />

## Speaking engagements

### Upcoming

{% for event in site.data.speaking %}
**{{ event.title }}**
<br />[{{ event.venue }}]({{ event.link }})
<br />{{ event.location }}
<br />{{ event.date }}
{% endfor %}

{% include container-end.html style=2 %}
