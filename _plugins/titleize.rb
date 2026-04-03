module Jekyll
  module TitleizeFilter
    def titleize(input)
      words = input.include?("_") ? input.split("_").join(" ") : input
      words.split(" ").map do |word|
        word[0].upcase + word[1..]
      end.join(" ")
    end
  end
end

Liquid::Template.register_filter(Jekyll::TitleizeFilter)
