---
layout: page
permalink: /repositories/
title: repositories
description: GitHub profile and the repositories behind my projects.
nav: true
nav_order: 4
---

{% if site.data.repositories.github_users %}

## GitHub profile

{% for user in site.data.repositories.github_users %}
{% include repository/repo_user.liquid username=user %}
{% endfor %}

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

## GitHub repositories

<div class="repositories row row-cols-1 row-cols-md-2">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid entry=repo %}
  {% endfor %}
</div>
{% endif %}
