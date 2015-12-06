class Step < ActiveRecord::Base
  belongs_to :todo

  validates :todo_id, :content, presence: true
  validates :done, inclusion: {in: [true, false]}

end
