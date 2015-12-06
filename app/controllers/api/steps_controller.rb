class Api::StepsController < ApplicationController
  def index           # QUESTION: how are nested routes done again?
    render json: steps_from_todo_id
  end

  def show            # QUESTION: do i need to get all steps from todo here?
    step = Step.find(params[:id])
    render json: step
  end

  def create
    step = steps_from_todo_id.create!(step_params)
    render json: step
  end

  def destroy
    step = Step.find(params[:id])
    step.destroy!

    render json: step
  end

  def update
    step = Step.find(params[:id])
    # don't need assignment.. will still update! if assign, becomes boolean
    step.update!(step_params)

    render json: step
  end

  private

  def steps_from_todo_id
    Todo.find(params[:todo_id]).steps
  end

  def step_params
    params.require(:step).permit(:todo_id, :content, :done)
  end
end
