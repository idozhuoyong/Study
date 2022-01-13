import pygal

from die import Die

# 创建一个D6
d6 = Die()

# 掷几次骰子，并将结果存储在一个列表中
results = []
for roll_num in range(1000):
    result = d6.roll()
    results.append(result)

# 分析结果
frequencies = []
for value in range(1, d6.num_sides+1):
    frequency = results.count(value)
    frequencies.append(frequency)

# 对结果进行可视
hist = pygal.Bar()
hist.title = "Results of rolling one D6 1000 times."
hist.x_labels = ['1', '2', '3', '4', '5', '6']
hist.x_title = "Result"
hist.y_title = "Frequency of Result"

hist.add('D6', frequencies)
hist.render_to_file('die_visual.svg')

# print(frequencies)