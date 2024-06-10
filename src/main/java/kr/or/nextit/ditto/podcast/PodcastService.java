package kr.or.nextit.ditto.podcast;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PodcastService {
    private final PodcastMapper mapper;

    List<PodcastVO> selectPodcast(){
        return mapper.selectPodcast();
    }
}
