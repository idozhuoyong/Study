class Settings():
    """ 存储所有设置的类 """
    def __init__(self):
        """ 初始化设置 """
        self.screen_width = 375
        self.screen_height = 750
        self.bg_color = (230, 230, 230)

        # 飞船设置
        self.ship_limit = 3

        # 子弹设置
        self.bullet_width = 3
        self.bullet_height = 15
        self.bullet_color = 60, 60, 60
        self.bullets_allowed = 3

        # 外星人设置
        self.fleet_drop_speed = 10

        # 以什么样的速度加快游戏节奏
        self.speedup_scale = 1.1 

        # 初始化动态配置
        initialize_dynamic_settings()
    
    def initialize_dynamic_settings(self):
        """ 初始化随游戏进行而变化的设置 """
        self.ship_speed_factor = 1.5 # 飞船速度
        self.bullet_speed_factor = 3 # 子弹飞行速度
        self.alien_speed_factor = 1 # 外星人速度
        # 1表示向右移动，-1表示向左移动
        self.fleet_direction = 1
    
    def increase_speed(self):
        """ 提高速度设置 """
        self.ship_speed_factor *= self.speedup_scale
        self.bullet_speed_factor *= self.speedup_scale
        self.alien_speed_factor *= self.speedup_scale
        