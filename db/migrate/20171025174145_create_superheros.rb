class CreateSuperheros < ActiveRecord::Migration[5.1]
  def change
    create_table :superheros do |t|
      t.string :name
      t.text :description
      t.text :color
      t.timestamps
    end
  end
end
