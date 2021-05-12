# Ruby on Rails + Webpack Application Template

## Features
- Use [Ruby on Rails](https://rubyonrails.org/).
- Use [webpack](https://webpack.js.org/) instead of `webpacker`.
- Use [view_component](https://github.com/github/view_component) as a framework for building encapsulated component.
- Use [tailwindcss](https://tailwindcss.com/) as CSS Framework.
- Use [PostgreSQL](https://www.postgresql.org/) as database.
- Use [Rspec](https://github.com/rspec/rspec-rails) as Testing Framework.

---

## Usage

Start the server with `docker compose`.

```
$ docker compose build
$ docker compose up
```

If gems and packages is not installed...

```
$ docker compose exec web bundle install 
$ docker compose exec yarn
```
⚠️ `docker compose exec` command is used when container is runnning...

### Quick start
Create a new template.
```
docker compose exec web bundle exec rails generate component Example title

->
Running via Spring preloader in process 44
      create  app/components/example_component.rb
      invoke  rspec
      create    spec/components/example_component_spec.rb
      invoke  erb
      create    app/components/example_component.html.erb
```

```rb
# app/components/example_component.rb
# frozen_string_literal: true

class ExampleComponent < ApplicationComponent
  def initialize(title:)
    @title = title
  end

end
```

Create a primary button with tailwindcss.
```rb
# app/components/example_component.html.erb
<button class="bg-blue-500 px-4 py-2 text-sm font-semibold tracking-wider text-white rounded hover:bg-blue-600"><%= @title %></button>
```

This can be written as 
```rb
# app/components/example_component.rb
# frozen_string_literal: true

class ExampleComponent < ApplicationComponent
  def initialize(title:)
    @title = title
  end

  private

  def style_element
   {
     primary_button: 'bg-blue-500 px-4 py-2 text-sm font-semibold tracking-wider text-white rounded hover:bg-blue-600'
   }
end

# app/components/example_component.html.erb
<button class="<%= styles.primary_button %>"><%= @title %></button>
```

This button can be rendered anywhere.
```rb
<%= render ExampleComponent.new(title: 'SampleTitle') %>
```

**It can be maintained easily viewable HTML structure by encapsulating complex css.**












