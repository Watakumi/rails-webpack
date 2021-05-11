class ApplicationComponent < ViewComponent::Base
  def styles
    @styles ||= OpenStruct.new(style_element)
  end

  def style_element
    raise NotImplementedError
  end
end
