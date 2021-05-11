# frozen_string_literal: true

class HomeComponent < ApplicationComponent
  def initialize(item: sample_item)
    @item = item
  end

  private

  attr_reader :item

  def sample_item
    OpenStruct.new(name: 'sample', description: 'This is sample component.')
  end

  def style_element
    {
      container: 'p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4',
      image_box: 'flex-shrink-0',
      image_size: 'h-12 w-12',
      item_name: 'text-xl font-medium text-black',
      item_description: 'text-gray-500'
    }
  end
end