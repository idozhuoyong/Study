import sys
import pygame

from settings import Settings

def run_game():
    # 初始化
    pygame.init()
    ai_settings = Settings()
    screen = pygame.display.set_mode((ai_settings.screen_width, ai_settings.screen_height)) # 创建窗口
    pygame.display.set_caption("Alien Invasion") # 设置说明

    while True:
        # 监听键盘和鼠标
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                sys.exit()

        screen.fill(ai_settings.bg_color) # 填充背景颜色
        
        # 让最近绘制的屏幕可见
        pygame.display.flip()

run_game()