class ExampleComponentPreview < ViewComponent::Preview
  def default(title: "Example component default")
    render(ExampleComponent.new(title: title))
  end
end