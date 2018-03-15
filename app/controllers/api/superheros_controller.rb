module Api
  class SuperherosController < ApplicationController
    before_action :set_superhero, only: [:update, :destroy]

    def index
      render json: Superhero.all
    end

    def search
      query = params[:query]
      superheros = Superhero.where('name LIKE ? OR color LIKE ? OR description LIKE ?',
                           "%#{query}%", "%#{query}%", "%#{query}%")
      render json: superheros
    end

    def create
      superhero = Superhero.new(superhero_params)
      if superhero.save
        render json: superhero
      else
        render nothing: true, status: :bad_request
      end
    end

    def destroy
      @superhero.destroy
      head :no_content
    end

    private

    def superhero_params
      params.require(:superhero).permit(:name, :description, :color)
    end

    def set_superhero
      @superhero = Superhero.find(params[:id])
    end
  end
end

