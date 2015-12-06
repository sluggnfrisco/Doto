class Todo < ActiveRecord::Base
  has_many :steps

  validates :title, :body, presence: true
  validates :done, inclusion: {in: [true, false]}
end
