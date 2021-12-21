class Settings():
    """ 存储所有设置的类 """
    def __init__(self):
        """ 初始化设置 """
        self.screen_width = 375
        self.screen_height = 750
        self.bg_color = (230, 230, 230)

        # 飞船设置
        self.ship_speed_factor = 1.5 # 飞行速度

        # 子弹设置
        self.bullet_speed_factor = 1 # 子弹飞行速度
        self.bullet_width = 3
        self.bullet_height = 15
        self.bullet_color = 60, 60, 60
        self.bullets_allowed = 3

        # 外星人设置
        