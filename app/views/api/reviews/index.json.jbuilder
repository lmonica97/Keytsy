@reviews.each do |review|
    json.set! review.id do 
        json.partial! 'api/reviews/review', review: review
        json.date review.created_at.strftime('%B %d, %Y')
        json.extract! review.reviewer, :name
    end
end