import sys
import pygame
from pygame.sprite import Group

from settings import Settings
from ship import Ship
import game_functions as gf

def run_game():
    # 初始化
    pygame.init()
    ai_settings = Settings()
    screen = pygame.display.set_mode((ai_settings.screen_width, ai_settings.screen_height)) # 创建窗口
    pygame.display.set_caption("Alien Invasion") # 设置说明

    # 创建一艘飞船
    ship = Ship(ai_settings, screen)
    # 创建子弹编组
    bullets = Group()

    while True:
        # 监听键盘和鼠标
        gf.check_events(ai_settings, screen, ship, bullets)
        
        # 更新飞船
        ship.update() # 飞船
        # 更新子弹
        gf.update_bullets(bullets)

        # 更新屏幕
        gf.update_screen(ai_settings, screen, ship, bullets)

run_game()