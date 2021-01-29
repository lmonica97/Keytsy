class User < ApplicationRecord 
    validates :name, presence: true 
    validates :email, presence: {message: "Please enter a valid email address."}, uniqueness: true
    validates :password_digest, presence: true 
    validates :session_token, presence: true 
    validates :password, presence: true, length: { minimum: 6 }, allow_nil: true 

    attr_reader :password 

    after_initialize :ensure_session_token 

    has_many :products,
    primary_key: :id,
    foreign_key: :seller_id,
    class_name: :Product

    has_many :cartitems,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Cartitem

    has_many :items,
    through: :cartitems,
    source: :product


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        if user.is_password?(password)
            return user 
        else 
            nil 
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token! 
        generate_unique_session_token
        save! 
        self.session_token
    end

    private 
    def ensure_session_token
       generate_unique_session_token unless self.session_token
    end
    
    def new_session_token
       SecureRandom.urlsafe_base64
    end
    
    def generate_unique_session_token
       self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
          self.session_token = new_session_token
        end
        self.session_token
    end
end