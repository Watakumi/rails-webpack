require 'rails_helper'

RSpec.describe ApplicationComponent, type: :component do
  let(:child_class) do
    Class.new(described_class)
  end
  let(:child_class_instance) { child_class.new }

  describe '#styles' do
    let(:style_test_element) do
      {
        first: first
      }
    end
    let(:first) { Faker::Name.name }

    it 'returns first style' do
      allow(child_class_instance).to receive(:style_element).and_return(style_test_element)
      expect(child_class_instance.styles.first).to eq(first)
    end
  end

  describe '#style_element' do
    it 'raises NotImplementedError' do
      expect { child_class_instance.style_element }.to raise_error(NotImplementedError)
    end
  end
end