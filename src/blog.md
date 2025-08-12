---
layout: layouts/base.njk
title: Blog
pagination:
  data: collections.post
  size: 10
  alias: posts
---

# Blog
{% if posts | length %}
<ul>
{% for post in posts %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>
{% else %}
<p>No posts yet.</p>
{% endif %}