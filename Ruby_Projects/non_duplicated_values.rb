def non_duplicated_values(values)
  out = []
  values.each{|val| out << val if values.count(val) == 1}
  return out
end