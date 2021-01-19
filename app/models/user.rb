class User < ApplicationRecord 
    validates :first_name, presence: true 
    validates :email, presence: true, uniqueness: true 
    validates :password_digest, presence: true 
    validates :session_token, uniqueness: true, presence: true 
    validates :password, presence: true, length: { minimum: 6, allow_nil: true }

    attr_reader :password 

    after_initialize :ensure_session_token 

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        if user.is_password?(password)
            user 
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
        self.session_token = generate_session_token
        self.save! 
        self.session_token
    end
    
    private 
    def generate_session_token 
        SecureRandom.urlsafe_base64
    end

    def ensure_session_token
        self.session_token || generate_session_token
    end 
end