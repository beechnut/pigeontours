module Jekyll
  module HumanizeFilter
    def humanize(snake_case_key)
      snake_case_key.split("_").join(" ")
    end
  end
end

Liquid::Template.register_filter(Jekyll::HumanizeFilter)
