import sys
import pygame

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
    ship = Ship(screen)

    while True:
        # 监听键盘和鼠标
        gf.check_event(ship)
        # 更新飞船
        ship.update()
        # 更新屏幕
        gf.update_screen(ai_settings, screen, ship)

run_game()