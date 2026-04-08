---
---
{% include container-start.html style=2 %}
# Speaking engagements

We talk about pigeons &mdash; a lot.

But our unofficial motto is, "It's not just about&nbsp;pigeons."

Co-founders and tour guides Hannah Michelle and Aspen can speak about pigeons from a variety of perspectives,&nbsp;including:

<div id="list01" class="list-component instance-1 style-1" markdown="1">
- current events, including misinformation, empathy, and&nbsp;stereotypes
- history, including ancient and modern pigeon&nbsp;history
- ecological literacy and environmental&nbsp;education
- ecology / urban and natural&nbsp;geography
- science&nbsp;communication
</div>

We're open to giving keynotes, joining panel discussions, or leading educational workshops.

{% include email.html text="Request a talk" %}
{% include container-end.html %}

{% include container-start.html style=1 %}
## Upcoming talks

{% for event in site.data.speaking %}
**{{ event.title }}**
<br />[{{ event.venue }}]({{ event.link }})
<br />{{ event.location }}
<br />{{ event.date }}
{% endfor %}

{% include email.html text="Request a talk" %}
{% include container-end.html %}
