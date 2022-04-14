class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  # add back :registerable to enable sign ups
  devise :database_authenticatable, :recoverable, :rememberable, :validatable
end
