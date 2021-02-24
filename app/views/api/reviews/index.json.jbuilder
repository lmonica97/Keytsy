@reviews.each do |review|
    json.set! review.id do 
        json.partial! 'api/reviews/review', review: review
        json.date review.convertToDate
        json.user review.reviewer, :name
    end
end