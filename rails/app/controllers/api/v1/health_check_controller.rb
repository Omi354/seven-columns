class Api::V1::HealthCheckController < ApplicationController
  def index
    render json: { message: "Success!"}, status: :ok
  end

end
