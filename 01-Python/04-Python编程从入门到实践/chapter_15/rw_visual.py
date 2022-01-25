import matplotlib.pyplot as plt

from random_walk import RandomWalk

# 多次随机漫步
while True:
    # 创建一个 RandomWalk 实例，并将其包含的点都绘制出来
    rw = RandomWalk(50000)
    rw.fill_walk()

    # 设置绘图窗口的尺寸
    plt.figure(dpi=128, figsize=(10, 6))

    point_numbers = list(range(rw.num_points))
    plt.scatter(rw.x_values, rw.y_values, c=point_numbers, cmap=plt.cm.Blues, edgecolor='none', s=1)

    # 突出起点和终点
    plt.scatter(0, 0, c='green', edgecolor='none', s=100)
    plt.scatter(rw.x_values[-1], rw.y_values[-1], c='red', edgecolor='none', s=100)

    # 隐藏坐标轴
    # plt.axes().get_xaxis().set_visible(False) # 无效，实际隐藏了图形
    # plt.axes().get_yaxis().set_visible(False)
    plt.axis('off')

    plt.show()

    keep_runing = 'n' # input("Make another walk? (y/n):")
    if keep_runing == 'n':
        break