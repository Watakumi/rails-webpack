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
end