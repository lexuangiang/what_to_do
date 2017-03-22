class Task < ApplicationRecord
  belongs_to :user

  validates :title, presence: true, length: { maximum: 20,
    too_long: "%{count} characters is the maximum allowed" }
  validates :content, presence: true
end
