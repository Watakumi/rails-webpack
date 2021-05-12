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
end
