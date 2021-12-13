import sys
import pygame

from settings import Settings
from ship import Ship

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
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                sys.exit()

        # 重新绘制屏幕
        screen.fill(ai_settings.bg_color) # 填充背景颜色
        ship.blitme()
        
        # 让最近绘制的屏幕可见
        pygame.display.flip()

run_game()