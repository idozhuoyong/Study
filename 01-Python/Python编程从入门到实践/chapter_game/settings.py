class Settings():
    """ 存储所有设置的类 """
    def __init__(self):
        """ 初始化设置 """
        self.screen_width = 375
        self.screen_height = 750
        self.bg_color = (230, 230, 230)

        # 飞船的设置
        self.ship_speed_factor = 1.5
    