class ResponsesController < ApplicationController
 		
  def index
		case
	  	when params[:category] == 'yard'
         @responses = Response.yard
      when params[:category] == 'water'
         @responses = Response.water
      when params[:category] == 'solar'
         @responses = Response.solar
      when params[:category] == 'lighting'
         @responses = Response.lighting
      when params[:category] == 'appliances'
         @responses = Response.appliances
      when params[:category] == 'transportation'
         @responses = Response.transportation
      when params[:category] == 'eating'
         @responses = Response.eating
      when params[:category] == 'recycle'
         @responses = Response.recycle
      when params[:category] == 'heating_cooling'
         @responses = Response.heating_cooling
      else
        @responses = Response.all
    end
    render json: { 
      responses: @responses,
      user: current_user,
      user_total_points: current_user.total_points
    }
  end

  def show
   render json: @response
  end

  def create
    @responses = []
    params[:data].keys.each_with_index do |question_key, index|
      question = Question.find_by(question_key: question_key)
      answer = params[:data][question_key]
      points = question.answer_key[answer]
      
      response_data = {
         survey_id: 1,
         user_id: current_user.id,
         question_id: question.id,
         answer: answer,
         points: points
      }

      new_response = Response.create(response_data)
      @responses.push(new_response)
    end

    render json: { 
      category: @responses.first.category, 
      responses: @responses,
      user: current_user,
      user_total_points: current_user.total_points   
    }
  end

  def community_total
    community_total = Response.community_total
    render json: { community_total: community_total }
  end

  def category_total
    category_total = Response.category_total(params[:id].to_i)
    render json: { category_total: category_total }
  end

  def affiliation_total
    affiliation_total = Response.affiliation_total(params[:id].to_i)
    render json: { affiliation_total: affiliation_total }
  end

  private 

  def set_response
   @response = Response.find(params[:id])
  end

  def response_params
    require(:response).permit( :survey_id, :question_id, :user_id, :answer, :points)
  end
end
