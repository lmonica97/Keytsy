@categories.each do |category| 
    json.set! category.id do 
        json.extract! category, :category_name
    end
end